import React from 'react'
import Modal from '../common/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { setFilterText, addActiveCategory, removeActiveCategory } from '../../slices/blogFeedSlice'
import { ButtonConfig, ButtonGridFieldConfig, TextInputFieldConfig } from '../../types/common'
import ModalField from '../common/ModalField'
import TextInput from '../common/controls/TextInput'
import ButtonGrid from '../common/controls/ButtonGrid'


const BlogFilterModal = (props) => {

    const { categories }: { categories: string[] } = props
    const fields = [] as JSX.Element[]
    const dispatch = useDispatch()
    const activeCategories = useSelector((state: any) => state.blog.activeCategories)
    const filterText = useSelector((state: any) => state.blog.filterText)

    

    const inputConfig = {
        placeholder: 'Filter articles by title text',
        value: filterText,
        onChange: (e) => {
            dispatch(setFilterText(e.target.value))
        }
    } as TextInputFieldConfig

    fields.push(
        <ModalField key={'title-text-filter-input'}>
            <TextInput data={inputConfig}/>
        </ModalField>
    )

    const buttonGridConfig = {
        name: 'Categories',
        buttons: {}
    } as ButtonGridFieldConfig

    categories.forEach(category => {
        buttonGridConfig.buttons[category] = {
            label: category,
            onClick: (e) => {
                if (activeCategories.includes(category)) {
                    dispatch(removeActiveCategory(category))
                } else {
                    dispatch(addActiveCategory(category))
                }
            },
            active: activeCategories.includes(category)
        } as ButtonConfig & { active: boolean }
    })

    fields.push(
        <ModalField label={'Categories'} key={'category-grid'}>
            <ButtonGrid data={buttonGridConfig}/>
        </ModalField>
    )

    return (
        <Modal 
            title={'Blog feed filters'}
            fields={fields}
        />
    )
}

export default BlogFilterModal
