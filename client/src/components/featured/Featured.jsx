import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=Jakarta,Tanggerang,Bekasi"
  );

  return (
    <div className="featured">
      {loading ? (
        "Sabar kontol"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://i.pinimg.com/originals/50/f9/25/50f9258c51e6432fddccd1cebf69eacc.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Jakarta</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://i0.wp.com/kliktangerang.com/wp-content/uploads/2022/10/Kode-pos-kota-tangerang-selatan.jpg?fit=743%2C425&ssl=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Tanggerang</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cdn1-production-images-kly.akamaized.net/0FklgUdhhRaD5O88kQQAdOOo0TE=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4084338/original/066963800_1657460159-FOTO.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Bekasi</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
