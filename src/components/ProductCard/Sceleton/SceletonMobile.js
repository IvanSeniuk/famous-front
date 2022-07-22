import ContentLoader from 'react-content-loader'

const SceletonMobile = (props) => (
    <ContentLoader
        speed={1}
        width={560}
        height={180}
        viewBox="0 0 550 180"
        backgroundColor="#2b2b2b"
        foregroundColor="#3b3b3b"
        {...props}
    >
        <rect x="12" y="10" rx="5" ry="5" width="561" height="186" />
    </ContentLoader>
)

export default SceletonMobile
