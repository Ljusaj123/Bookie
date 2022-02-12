import Link from "next/link";

const ShowCatalog = () => {
    return (
        <section className="show-catalog">
            <div className="show-catalog-container">
                <h1>See more of interesting books</h1>
                <Link href="/catalog">
                    <button>
                        Show catalog
                    </button>
                </Link>

            </div>
        </section>
    );
}

export default ShowCatalog;