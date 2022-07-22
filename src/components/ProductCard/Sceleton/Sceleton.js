import ContentLoader from 'react-content-loader'

const Sceleton = (props) => (
    <ContentLoader
        speed={1}
        width={460}
        height={560}
        viewBox="0 0 460 560"
        backgroundColor="#292929"
        foregroundColor="#212121"
        {...props}
    >
        <rect x="-1" y="9" rx="2" ry="2" width="468" height="582" />
    </ContentLoader>
)

export default Sceleton
