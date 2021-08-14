import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks/hooks";
import { LibraryItemCard } from "../components/LibraryItemCard";
import { selectLibraryItem } from "../store/librarySlice";

import { useFormik } from "formik";
import { updateLibraryItem } from "../store/librarySlice";
import {
  LibraryItemStatus,
  LibraryItemUpdate,
} from "../../../app/definitions/types";
import { ChangeEvent } from "react";

export const LibraryItemContainer = () => {
  const libraryItem = useAppSelector(selectLibraryItem);
  const dispatch = useAppDispatch();
  const formik = useFormik<LibraryItemUpdate>({
    initialValues: {
      rating: libraryItem ? libraryItem.rating : null,
      review: libraryItem ? libraryItem.review : null,
      status: libraryItem ? libraryItem.status : null,
      isOwned: libraryItem ? libraryItem.isOwned : null,
    },
    onSubmit: (values: LibraryItemUpdate) => {
      if (libraryItem === null) {
        return;
      }
      dispatch(updateLibraryItem({ id: libraryItem?.id, updates: values }));
    },
    enableReinitialize: true,
  });

  const statusOptions = {
    "Want to read": LibraryItemStatus.WANT_TO_READ,
    "In progress": LibraryItemStatus.IN_PROGRESS,
    Finished: LibraryItemStatus.FINISHED,
    "Did not finish": LibraryItemStatus.DID_NOT_FINISH,
  };
  const statusOnChange = (value: unknown) =>
    formik.setFieldValue("status", value);

  const isOwnedOptions = {
    "I own this book": true,
    "I don't own this book": false,
  };

  const isOwnedOnChange = (value: unknown) =>
    formik.setFieldValue("isOwned", value);

  const ratingOnChange = (event: ChangeEvent<{}>, value: number | null) =>
    formik.setFieldValue("rating", value);
  return (
    <>
      {libraryItem && (
        <LibraryItemCard
          formik={formik}
          statusOptions={statusOptions}
          statusOnChange={statusOnChange}
          isOwnedOptions={isOwnedOptions}
          isOwnedOnChange={isOwnedOnChange}
          ratingOnChange={ratingOnChange}
        ></LibraryItemCard>
      )}
    </>
  );
};
