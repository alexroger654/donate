import React from "react";
import TransactionTable from "./(components)/TransactionTable";

export default function page() {
  return (
    <div>
      <section className="antialiased  h-screen px-4 mt-12 lg:px-16">
        <div className="w-full  mx-auto bg-white shadow-lg rounded-xl border border-gray-100">
          <TransactionTable />
        </div>
      </section>
    </div>
  );
}
