import { useEffect } from "react";
import useStore, { useActions } from "../store/myStore";

function Products() {
  const productList = useStore((state) => state.listOfProducts);
  const { fetchListOfProducts } = useActions();
  useEffect(() => {
    fetchListOfProducts();
  }, []);

  return (
    <div className="px-20">
      <h1 className="text-center font-bold text-3xl">List of Products</h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {productList?.length > 0 ? (
          productList.map((item) => (
            <li
              style={{
                border: "2px solid white",
                margin: "4px",
                listStyle: "none",
                borderRadius: "5px",
              }}
              key={item.id}
              className="bg-white shadow-lg rounded-xl p-4 hover:shadow-lg transition"
            >
              <img
                src={item?.thumbnail}
                alt={item?.title}
                className="w-full h-60 object-cover rounded-lg cursor-pointer"
              />
              <p className="text-center text-lg font-semibold mt-3">
                {item?.title}
              </p>
            </li>
          ))
        ) : (
          <h1 className="col-span-full text-center text-xl font-medium">
            Loading! Please wait...
          </h1>
        )}
      </ul>
    </div>
  );
}

export default Products;
