const CategoryCard = ({ img, text, txt, url }) => {
  return (
    <>
      <a href={url}>
        <img src={img} alt="Image" />
        <p className="block text-[2.4rem] font-semibold text-center mt-[8px]">
          {text}
          <br />
          {txt}
        </p>
      </a>
    </>
  );
};

export default CategoryCard;
