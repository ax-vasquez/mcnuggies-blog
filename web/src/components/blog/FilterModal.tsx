import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFilterText } from '../../slices/blogFeedSlice'
import { CategoryFilterLabel } from './CategoryFilterLabel'

export const FilterModal = ({ 
    categories,
    setHideFilterModal,
}: { 
    categories: string[]
    setHideFilterModal: () => void
}) => {
    const filterText = useSelector((state: any) => state.blog.filterText)
    const dispatch = useDispatch()
    return (
        <div className="modal">
            <div className="modal-filter-title-line">
                <button
                    onClick={() => setHideFilterModal()}
                    className="inline-block float-left ml-2 text-red-400 hover:text-red-800"
                >X</button>
                <h1 className="inline-block font-extralight">filters</h1>
            </div>
            <br />
            <div className="modal-filter-by-text-field">
                <div >
                    <input className="border rounded p-2 text-center" placeholder="filter by text"
                        onChange={e => {
                            dispatch(setFilterText(e.target.value))
                        }}
                        value={filterText}
                    />
                </div>
                <button className="ml-2 text-gray-400 hover:text-red-400"
                    onClick={() => dispatch(setFilterText(``))}
                >clear text</button>
            </div>
            <div className="category-grid">
                {categories.map(cat => <CategoryFilterLabel label={cat}/>)}
            </div>
            <div className="modal-footer">
                <p>
                    You can simply close this modal once you've configured filters as you like - the feed
                    will update as you type and/or make changes to the active categories.
                </p>
            </div>
            <div className="text-center mb-4">
                <button className="ml-2 text-red-200 hover:text-red-400">reset all filters</button>
            </div>
        </div>
    )
}
