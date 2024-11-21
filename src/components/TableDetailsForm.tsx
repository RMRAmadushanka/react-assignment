import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import MinusSvg from "../Assets/Button.base (1).svg";
import PlusSvg from "../Assets/Button.base (2).svg";
import { useDispatch, useSelector } from "react-redux";
import { updateItem } from "../redux/droppedItemsSlice";

// Define validation schema using Yup
const validationSchema = Yup.object({
  tableName: Yup.string().required("Table Name is required"),
  minCovers: Yup.number()
    .min(1, "Min Covers must be at least 1")
    .required("Min Covers is required"),
  maxCovers: Yup.number()
    .min(1, "Max Covers must be at least 1")
    .required("Max Covers is required"),
  online: Yup.boolean(),
});

const TableDetailsForm = () => {
  const dispatch = useDispatch();
  const droppedItems = useSelector((state: any) => state.droppedItems.items);
  const selectedItemId = useSelector((state: any) => state.droppedItems.selectedItemId);

  const selectedItem = droppedItems.find(
    (item: any) => item.uniqueId === selectedItemId
  );

  if (!selectedItem) {
    return <p className="text-gray-500 text-center">No item selected</p>;
  }

  return (
    <Formik
      initialValues={{
        tableName: selectedItem.tableName || "",
        minCovers: selectedItem.minCovers || 1,
        maxCovers: selectedItem.maxCovers || 1,
        online: selectedItem.online || false,
      }}
      validationSchema={validationSchema}
      enableReinitialize
      onSubmit={(values) => {
        console.log("Form Values:", values);
      }}
    >
      {({ values, handleChange, setFieldValue }) => (
        <Form className="space-y-4">
          {/* Table Name */}
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-700">Table Name</span>
            <Field
              type="text"
              name="tableName"
              className="mt-1 block w-full border-gray-100 rounded shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
              placeholder="Enter name"
              value={values.tableName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                handleChange(e);
                dispatch(
                  updateItem({ ...selectedItem, tableName: e.target.value })
                );
              }}
            />
          </div>

          {/* Min Covers */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700">Min Covers</span>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                className="w-8 h-8 flex items-center justify-center rounded-full"
                onClick={() => {
                  if (values.minCovers > 1) {
                    setFieldValue("minCovers", values.minCovers - 1);
                    dispatch(
                      updateItem({
                        ...selectedItem,
                        minCovers: values.minCovers - 1,
                      })
                    );
                  }
                }}
              >
                <img src={MinusSvg} alt="minus icon" />
              </button>
              <Field
                type="number"
                name="minCovers"
                className="w-12 text-center border border-gray-300 rounded-md sm:text-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                readOnly
                value={values.minCovers}
              />
              <button
                type="button"
                className="w-8 h-8 flex items-center justify-center rounded-full"
                onClick={() => {
                  setFieldValue("minCovers", values.minCovers + 1);
                  dispatch(
                    updateItem({
                      ...selectedItem,
                      minCovers: values.minCovers + 1,
                    })
                  );
                }}
              >
                <img src={PlusSvg} alt="plus icon" />
              </button>
            </div>
          </div>

          {/* Max Covers */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700">Max Covers</span>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                className="w-8 h-8 flex items-center justify-center rounded-full"
                onClick={() => {
                  if (values.maxCovers > 1) {
                    setFieldValue("maxCovers", values.maxCovers - 1);
                    dispatch(
                      updateItem({
                        ...selectedItem,
                        maxCovers: values.maxCovers - 1,
                      })
                    );
                  }
                }}
              >
                <img src={MinusSvg} alt="minus icon" />
              </button>
              <Field
                type="number"
                name="maxCovers"
                className="w-12 text-center border border-gray-300 rounded-md sm:text-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                readOnly
                value={values.maxCovers}
              />
              <button
                type="button"
                className="w-8 h-8 flex items-center justify-center rounded-full"
                onClick={() => {
                  setFieldValue("maxCovers", values.maxCovers + 1);
                  dispatch(
                    updateItem({
                      ...selectedItem,
                      maxCovers: values.maxCovers + 1,
                    })
                  );
                }}
              >
                <img src={PlusSvg} alt="plus icon" />
              </button>
            </div>
          </div>

          {/* Online Toggle */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-700">Online</span>
            <div className="flex items-center">
              <span
                className={`mr-2 text-sm ${
                  values.online ? "text-red-500" : "text-gray-500"
                }`}
              >
                {values.online ? "Active" : "Inactive"}
              </span>
              <label className="inline-flex items-center cursor-pointer">
                <Field
                  type="checkbox"
                  name="online"
                  className="hidden"
                  checked={values.online}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const isChecked = e.target.checked;
                    handleChange(e);
                    dispatch(updateItem({ ...selectedItem, online: isChecked }));
                  }}
                />
                <span className="w-10 h-6 flex items-center bg-red-700 rounded-full p-1 transition-all duration-300 ease-in-out">
                  <span
                    className={`w-4 h-4 bg-gray-100 rounded-full shadow-md transform ${
                      values.online ? "translate-x-4" : ""
                    } transition-all duration-300 ease-in-out`}
                  ></span>
                </span>
              </label>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default TableDetailsForm;
