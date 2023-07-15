import { FC, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { TbArrowBigLeftLines, TbArrowBigRightLines } from "react-icons/tb";
import useStore from "store/store";
import { fetchBeerRecipes } from "services/fetchApi";
import RecipesList from "components/RecipesList/RecipesList";
import { PaginationWrapper } from "components/Pagination/Pagination.styled";
import Loader from "components/Loader/Loader";

const Recipes: FC = () => {
  const beerRecipes = useStore((state) => state.beerRecipes);
  const setBeerRecipes = useStore((state) => state.setBeerRecipes);
  const currentPage = useStore((state) => state.currentPage);
  const setCurrentPage = useStore((state) => state.setCurrentPage);
  const isLoading = useStore((state) => state.isLoading);
  const setIsLoading = useStore((state) => state.setLoading);

  const location = useLocation();

  const [isFirstPage, setIsFirstPage] = useState(true);
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getRecepies = async (page: number) => {
      try {
        const { data, currentPage } = await fetchBeerRecipes(page);

        if (data) {
          setBeerRecipes(data);
          setCurrentPage(currentPage);
          setIsFirstPage(currentPage === 1);
          setIsLastPage(currentPage === 22);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getRecepies(currentPage);
  }, [currentPage, setBeerRecipes, setCurrentPage, setIsLoading]);

  return (
    <>
      {isLoading ? (
        <>
          <Loader />
          <PaginationWrapper
            style={{
              position: "fixed",
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <ReactPaginate
              pageCount={22}
              pageRangeDisplayed={5}
              marginPagesDisplayed={2}
              onPageChange={({ selected }) => {
                setCurrentPage(selected + 1);
              }}
              renderOnZeroPageCount={null}
              activeClassName="active"
              previousClassName={isFirstPage ? "disabled" : ""}
              nextClassName={isLastPage ? "disabled" : ""}
              previousLabel={<TbArrowBigLeftLines />}
              nextLabel={<TbArrowBigRightLines />}
            />
          </PaginationWrapper>
        </>
      ) : (
        <>
          <RecipesList recipes={beerRecipes} location={location} />
          <PaginationWrapper>
            <ReactPaginate
              pageCount={22}
              pageRangeDisplayed={5}
              marginPagesDisplayed={2}
              onPageChange={({ selected }) => {
                setCurrentPage(selected + 1);
              }}
              renderOnZeroPageCount={null}
              activeClassName="active"
              previousClassName={isFirstPage ? "disabled" : ""}
              nextClassName={isLastPage ? "disabled" : ""}
              previousLabel={<TbArrowBigLeftLines />}
              nextLabel={<TbArrowBigRightLines />}
              forcePage={currentPage - 1}
            />
          </PaginationWrapper>
        </>
      )}
    </>
  );
};

export default Recipes;
