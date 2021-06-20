import { useEffect, useState } from "react";

const Actions = () => {
  let [users, setUsers] = useState([]);
  let [salesorders, setsalesorders] = useState([]);
  let [salesdetails, setsalesdetails] = useState([]);

    //userLength is for showing the Data Loading message.
  let [userLength, setUserLength] = useState(null);

  useEffect(() => {
    fetch("http://localhost/php-react/selectsalesorder.php")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setsalesorders(data.salesorders);
          console.log(data);
          console.log("one");
          setUserLength(true);
        } else {
          setUserLength(0);
          console.log("two");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const insertsalesdetail = (newsalesdetail) => {
    fetch("http://localhost/php-react/addsalesdetail.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newsalesdetail),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.id) {
          setsalesdetails([
            {
              id: data.id,
              ...newsalesdetail,
            },
            ...salesdetails,
          ]);
          setUserLength(true);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Inserting a new user into the database.
  const insertsalesorder = (newsalesorder) => {
    fetch("http://localhost/php-react/addsalesorder.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newsalesorder),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.id) {
          setsalesorders([
            {
              id: data.id,
              ...newsalesorder,
            },
            ...salesorders,
          ]);
          setUserLength(true);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Enabling the edit mode for a listed user.
  const editMode = (orderid) => {
    salesorders = salesorders.map((salesorder) => {
      if (salesorder.orderid === orderid) {
        salesorder.isEditing = true;
        return salesorder;
      }
      salesorder.isEditing = false;
      return salesorder;
    });
    setsalesorders(salesorders);
  };

  // Cance the edit mode.
  const cancelEdit = (seq) => {
    salesorders = salesorders.map((salesorder) => {
      if (salesorder.seq === seq) {
        salesorder.isEditing = false;
        return salesorder;
      }
      return salesorder;
    });
    setsalesorders(salesorders);
  };

  const updatesalesorder = (apple) => {
    console.log(apple);
    fetch("http://localhost/php-react/updatesalesorder.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apple),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          alert(data.msg);
          salesorders = salesorders.map((salesorder) => {
            if (salesorder.seq === apple.seq) {
              salesorder.isEditing = false;
              salesorder.salesorder_orderid = apple.salesorder_orderid;
              salesorder.salesorder_empid = apple.salesorder_empid;
              salesorder.salesorder_custid = apple.salesorder_custid;
              salesorder.salesorder_orderdate = apple.salesorder_orderdate;
              salesorder.salesorder_descript = apple.salesorder_descript;
              return salesorder;
            }
            return salesorder;
          });
          setsalesorders(salesorders);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Updating a user.
  const updateUser = (userData) => {
    fetch("http://localhost/php-react/update-user.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          users = users.map((user) => {
            if (user.id === userData.id) {
              user.isEditing = false;
              user.user_name = userData.user_name;
              user.user_email = userData.user_email;
              return user;
            }
            return user;
          });
          setUsers(users);
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deletesalesorder = (orderid) => {
    // filter outing the user.
  let salesorderDeleted = salesorders.filter((salesorder) => {
    return salesorder.orderid !== orderid;
  });
  fetch("http://localhost/php-react/deletesalesorder.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ theseq: orderid }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.success) {
        setsalesorders(salesorderDeleted);
        if (salesorders.length === 1) {
          setUserLength(0);
        }
      } else {
        alert(data.msg);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
  const selectsalesorder = (orderid) => {
    console.log(orderid);
  fetch("http://localhost/php-react/showsalesdetail.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ theorderid: orderid }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.success) {
        alert(JSON.stringify(data.salesorders));
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

  // Deleting a user.
  const deleteUser = (theID) => {
      // filter outing the user.
    let userDeleted = users.filter((user) => {
      return user.id !== theID;
    });
    fetch("http://localhost/php-react/delete-user.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: theID }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.success) {
          setUsers(userDeleted);
          if (users.length === 1) {
            setUserLength(0);
          }
        } else {
          alert(data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return {
    users,
    salesorders,
    editMode,
    cancelEdit,
    updateUser,
    insertsalesorder,
    insertsalesdetail,
    updatesalesorder,
    selectsalesorder,
    deletesalesorder,
    deleteUser,
    userLength,
  };
};

export default Actions;
