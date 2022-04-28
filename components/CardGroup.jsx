import styles from "../styles/Home.module.css"
const CardGroup = () => {
  return (
    <div className={`container ${styles.cardGroup}`}>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <img
              src="/avatar/thumbnail--20211123163630.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">Trở thành sinh viên chuẩn quốc tế</h5>
              <p className="card-text">
                Sinh viên Greenwich Việt Nam được học tập trong môi trường chuẩn
                Quốc Tế do Greenwich UK kiểm định.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="/avatar/tn--20211124092946.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">
                Ưu đãi và học bổng lên đến 100% học phí
              </h5>
              <p className="card-text">
                Quỹ học bổng năm 2022 trị giá 130 tỷ đồng nhằm hỗ trợ các thí
                sinh trên con đường theo đuổi ước mơ của mình.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="/avatar/qts-4-20210112104222.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">
                Bằng cấp quốc tế công việc toàn cầu
              </h5>
              <p className="card-text">
                Sinh viên tốt nghiệp được nhận bằng cử nhân do Đại học Greenwich
                (UK) cấp có giá trị toàn cầu.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src="/avatar/ta-3-20211122173320.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">
                Cơ hội việc làm ngay sau khi tốt nghiệp
              </h5>
              <p className="card-text">
                Theo thống kê, 98% sinh viên Greenwich Việt Nam có việc làm ngay
                sau khi tốt nghiệp. Có đến 40% sinh viên đi làm ngay sau kỳ OJT
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGroup;
