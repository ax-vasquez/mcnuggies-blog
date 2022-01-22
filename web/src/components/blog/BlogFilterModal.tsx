import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RiRefreshFill } from '@react-icons/all-files/ri/RiRefreshFill'
import Modal from '../common/Modal'
import {
 setFilterText, addActiveCategory, resetActiveCategories, removeActiveCategory, toggleShowModal,
} from '../../slices/blogFeedSlice'
import { ButtonConfig, ButtonGridFieldConfig, TextInputFieldConfig } from '../../types/common'
import ModalField from '../common/ModalField'
import TextInput from '../common/controls/TextInput'
import TagList from '../common/controls/TagList'

const BlogFilterModal = ({
    categories,
}:{
    categories: string[]
}) => {

    const fields = [] as JSX.Element[]
    const dispatch = useDispatch()
    const activeCategories = useSelector((state: any) => state.blog.activeCategories)
    const filterText = useSelector((state: any) => state.blog.filterText)

    const inputConfig = {
        placeholder: `Filter articles by title text`,
        value: filterText,
        onChange: (e) => {
            dispatch(setFilterText(e.target.value))
        },
    } as TextInputFieldConfig

    fields.push(
        <ModalField key="title-text-filter-input">
            <TextInput data={inputConfig} />
        </ModalField>,
    )

    const buttonGridConfig = {
        name: `Categories`,
        buttons: {},
    } as ButtonGridFieldConfig

    categories.forEach((category) => {
        buttonGridConfig.buttons[category] = {
            label: category,
            onClick: () => {
                if (activeCategories.includes(category)) {
                    dispatch(removeActiveCategory(category))
                } else {
                    dispatch(addActiveCategory(category))
                }
            },
            active: activeCategories.includes(category),
        } as ButtonConfig & { active: boolean }
    })

    fields.push(
        <ModalField label="Categories" key="category-grid" ButtonIcon={RiRefreshFill} buttonClickHandler={() => dispatch(resetActiveCategories())}>
            <TagList data={buttonGridConfig} />
        </ModalField>,
    )

    return (
        <Modal
          title="Blog feed filters"
          fields={fields}
          closeHandler={() => dispatch(toggleShowModal())}
        />
    )
}

export default BlogFilterModal
