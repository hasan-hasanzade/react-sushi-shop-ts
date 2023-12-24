import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import SushiBlock from '../components/SushiBlock';
import Skeleton from '../components/SushiBlock/Skeleton';
import Pagination from '../components/Pagination';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../redux/store';
import { useSelector } from 'react-redux';
import { setCategoryId, setCurrentPage } from '../redux/filter/slice';
import { fetchSushi } from '../redux/sushi/asyncActions';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { categoryId, sort, currentPage, searchValue } = useSelector((state: any) => state.filter);
  const { items, status } = useSelector((state: any) => state.sushi);
  const sortType = sort.sortProperty;

  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number: number) => {
    dispatch(setCurrentPage(number));
  };

  const getSushi = () => {
    const sortBy = sortType;
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `search=${searchValue}` : '';

    dispatch(
      fetchSushi({
        search,
        category,
        sortBy,
        currentPage,
      }),
    );
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);

    getSushi();
  }, [categoryId, sortType, searchValue, currentPage]);

  React.useEffect(() => {
    const queryString = qs.stringify({
      sortType,
      categoryId,
      currentPage,
    });

    navigate(`?${queryString}`);
  }, [categoryId, sortType, currentPage, navigate]);

  const sushi = items.map((obj: any) => <SushiBlock key={obj.id} {...obj} />);

  const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={(i) => onChangeCategory(i)} />
        <Sort />
      </div>
      <h2 className="content__title">Menu</h2>
      {status === 'error' ? (
        <div className="content__error">
          <h4 className="content__heading">
            Your search did not match any products. You may consider to:
          </h4>
          <ul className="content__list">
            <li>Check the spelling</li>
            <li>Use less keywords</li>
            <li>Use different keywords</li>
          </ul>
        </div>
      ) : (
        <div className="content__items">
          {status === 'loading' ? (
            <div className="content__items">{skeletons}</div>
          ) : (
            <>
              {sushi.length === 0 ? (
                <div className="content__text">
                  Nothing found. <br /> Please try again later
                </div>
              ) : (
                <div className="content__items">{sushi}</div>
              )}
            </>
          )}
        </div>
      )}
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </div>
  );
};

export default Home;
