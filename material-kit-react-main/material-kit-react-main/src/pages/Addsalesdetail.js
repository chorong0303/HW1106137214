const Addsalesdetail = () => {
  const submitUser = (e) => {
    e.preventDefault();
    e.target.reset();
  };
  return (
    <form className="insertForm" onSubmit={submitUser}>
      <h2>新增訂單主檔</h2>
      <label htmlFor="_orderid">
          訂單編號
        <input
          type="text"
          id="_orderid"
          placeholder="Enter orderid"
          autoComplete="off"
          required
        />
      </label>
        <label htmlFor="_prodid">
          產品代號
        <input
          type="text"
          id="_prodid"
          placeholder="Enter prodid"
          autoComplete="off"
          required
        />
        </label>
        <label htmlFor="_qty">
          數量
          <input
            type="text"
            id="_qty"
            placeholder="Enter qty"
            autoComplete="off"
            required
          />
        </label>
        <label htmlFor="_discount">
          折扣
          <input
            type="text"
            id="_discount"
            placeholder="Enter discount"
            autoComplete="off"
            required
          />
        </label>
        <input type="submit" value="新增" />
    </form>
  );
};

export default Addsalesdetail;
