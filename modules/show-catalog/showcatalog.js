import Link from "next/link";

const ShowCatalog = () => {
  return (
    <section className="show-catalog">
      <div className="show-catalog-container">
        <h1>See more of interesting books</h1>
        {/* eslint-disable-next-line */}
        <Link href="/catalog">
          <button>show catalog</button>
        </Link>
      </div>
    </section>
  );
};

export default ShowCatalog;
