import React from "react";
import DataTable from "./(components)/DataTable";

export default function page() {
  return (
    <div>
      <section className="antialiased  h-screen px-4 mt-12">
        <div className="w-full  mx-auto bg-white shadow-lg rounded-xl border border-gray-100">
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="text-lg font-semibold leading-7 text-gray-900">
              My Transactions
            </h2>
          </header>
          <DataTable />
        </div>
      </section>
    </div>
  );
}
