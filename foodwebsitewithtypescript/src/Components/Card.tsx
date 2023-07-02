import { Link } from "react-router-dom";

interface Props {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strThumb: string;
}

export const Card = ({
  idCategory,
  strCategory,
  strCategoryDescription,
  strThumb,
}: Props) => {
  return (
    <Link
      to={`/foodcategories/${strCategory}`}
      key={idCategory}
      className="card my-3 text-dark shadow"
      style={{ width: "18rem" }}
    >
      <img
        src={strThumb}
        loading="lazy"
        className="card-img-top img_fluid img-responsive rounded"
        alt={strCategory}
      />
      <div className="card-body">
        <h5 className="card-title">
          {idCategory} - {strCategory}
        </h5>
        {/* <p>{strCategoryDescription}</p> */}
      </div>
    </Link>
  );
};
