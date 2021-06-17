const Addsalesorder = () => {
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
      <label htmlFor="_empid">
        員工代號
        <input
          type="text"
          id="_empid"
          placeholder="Enter empid"
          autoComplete="off"
          required
        />
      </label>
      <label htmlFor="_custid">
        客戶代號
        <input
          type="text"
          id="_name"
          placeholder="Enter name"
          autoComplete="off"
          required
        />
      </label>
      <label htmlFor="_orderdate">
        訂單日期
        <input
          type="text"
          id="_orderdate"
          placeholder="Enter orderdate"
          autoComplete="off"
          required
        />
      </label>
      <label htmlFor="_descript">
        備註
        <input
          type="text"
          id="_descript"
          placeholder="Enter descript"
          autoComplete="off"
          required
        />
      </label>
      <input type="submit" value="新增" />
    </form>
  );
};

export default Addsalesorder;
