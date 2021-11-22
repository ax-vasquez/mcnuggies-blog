import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useDispatch } from 'react-redux'
import { toggleShowPrivacyModal } from '../slices/rootSlice'
import Modal from './common/Modal'
import { SanityPrivacyPolicy } from '../../graphql-types'
import { StyledBlockContent } from './styled-components/common'

const PrivacyModal = () => {

    const fields = [] as JSX.Element[]
    const dispatch = useDispatch()

    const data = useStaticQuery(graphql`
      query{
        sanityPrivacyPolicy(title: {eq: "Base"}) {
          _rawInfoCollectionChangeNotifications
          _rawInfoCollectionContact
          _rawInfoCollectionDescription
          _rawInfoCollectionPractices
          _rawInfoCollectionRationale
          _rawInfoCollectionSafety
          _rawInfoCollectionUsage
        }
      }
    `)

    const {
      _rawInfoCollectionDescription,
      _rawInfoCollectionRationale,
      _rawInfoCollectionPractices,
      _rawInfoCollectionUsage,
      _rawInfoCollectionChangeNotifications,
      _rawInfoCollectionContact,
      _rawInfoCollectionSafety,
    } = data.sanityPrivacyPolicy as SanityPrivacyPolicy

    const DataCollectionDescription = (
        <div>
            <h3>Data collected</h3>
            <StyledBlockContent blocks={_rawInfoCollectionDescription} />
        </div>
    )

    const DataCollectionExplanation = (
        <div>
            <h3>Data collection rationale</h3>
            <StyledBlockContent blocks={_rawInfoCollectionRationale} />
        </div>
    )

    const DataCollectionPractices = (
        <div>
            <h3>Data collection practice</h3>
            <StyledBlockContent blocks={_rawInfoCollectionPractices} />
        </div>
    )

    const DataCollectionUsage = (
        <div>
            <h3>Collected data usage</h3>
            <StyledBlockContent blocks={_rawInfoCollectionUsage} />
        </div>
    )

    const DataCollectionChangesNotifications = (
        <div>
            <h3>Changes to data collection practices</h3>
            <StyledBlockContent blocks={_rawInfoCollectionChangeNotifications} />
        </div>
    )

    const DataCollectionSafety = (
        <div>
            <h3>Data collection safety</h3>
            <StyledBlockContent blocks={_rawInfoCollectionSafety} />
        </div>
    )

    const DataCollectionQuestionsContact = (
        <div>
            <h3>Questions?</h3>
            <StyledBlockContent blocks={_rawInfoCollectionContact} />
        </div>
    )

    fields.push(
      DataCollectionDescription,
      DataCollectionExplanation,
      DataCollectionPractices,
      DataCollectionUsage,
      DataCollectionChangesNotifications,
      DataCollectionSafety,
      DataCollectionQuestionsContact,
    )

    return (
        <Modal
          title="Privacy policy"
          fields={fields}
          closeHandler={() => dispatch(toggleShowPrivacyModal())}
        />
    )
}

export default PrivacyModal
