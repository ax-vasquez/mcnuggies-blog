import React from 'react'
import CustomIcon from '../../shared/CustomIcon'
import styles from './BlogFeedControls.module.scss'

interface BlogFeedControlsProps {
    searchText: string
    // eslint-disable-next-line no-unused-vars
    searchTextHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
    filterButtonHandler: () => void
}

const BlogFeedControls: React.FC<BlogFeedControlsProps> = ({
    searchText,
    searchTextHandler,
    filterButtonHandler
}) => {
    return (
      <div className={styles.blogControls}>
        <input data-cy="blog-search-field" placeholder='Search...' value={searchText} onChange={searchTextHandler}/>
        <button className={styles.filterButton}
              onClick={filterButtonHandler}
            >
          <CustomIcon
                fileName='bootstrap-filter'
                width={32}
                height={32}
              />
        </button>
      </div>
    )
}

export default BlogFeedControls
