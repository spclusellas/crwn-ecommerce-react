import React from 'react'
import { useSelector } from "react-redux"

import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors"
import WithSpinner from "../with-spinner/with-spinner.component"
import CollectionOverview from "./collections-overview.component"

const isLoading = useSelector(selectIsCollectionFetching)




