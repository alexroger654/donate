///============================ get data
export async function getData(setData: any, reqItem: string, setLoading: any) {
  try {
    setLoading(true);
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}${reqItem}`);
    const result = await res.json();

    if (reqItem.includes("/list?id=")) {
      setData(result?.data[0] || []);
      setLoading(false);
      return result?.data || [];
    } else {
      setData(result?.data || []);
      setLoading(false);
    }
  } catch (e) {
    console.log(e);
    setLoading(false);
  }
}

//update data ===========================

export async function updateData(
  data: any,
  reqItem: string,
  reqId: string,
  setLoading: any
) {
  try {
    setLoading(true);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}${reqItem}/update/${reqId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (res.ok) {
      setLoading(false);
      return true;
    } else {
      setLoading(false);
      return false;
    }
  } catch (e) {
    console.log(e);
    setLoading(false);
  }
}

//==================== =======create data
export async function createData(
  data: any,
  reqItem: string,
  setLoading: any,
  refetch?: any
) {
  try {
    setLoading(true);

    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}${reqItem}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setLoading(false);
      if (refetch) {
        refetch();
      }
      return true;
    } else {
      setLoading(false);
      return false;
    }
  } catch (e) {
    console.log(e, "pppppppppppppp");
    setLoading(false);
  }
}

// delete data ===========================
export async function deleteData(
  reqItem: string,
  reqId: string,
  setLoading: any,
  refetch: any
) {
  try {
    setLoading(true);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}${reqItem}/delete/${reqId}`,
      {
        method: "DELETE",
      }
    );

    if (res.ok) {
      setLoading(false);
      if (refetch) {
        refetch();
      }
      return true;
    } else {
      setLoading(false);
      return false;
    }
  } catch (error) {
    setLoading(false);
    return false;
  }
}
