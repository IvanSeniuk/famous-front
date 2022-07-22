import ContentLoader from 'react-content-loader'

const SceletonTitle = (props) => (
    <ContentLoader
        speed={1}
        width={300}
        height={60}
        viewBox="0 0 300 60"
        backgroundColor="#2b2b2b"
        foregroundColor="#3b3b3b"
        {...props}
    >
        <rect x="12" y="10" rx="16" ry="16" width="233" height="47" />
    </ContentLoader>
)

export default SceletonTitle
