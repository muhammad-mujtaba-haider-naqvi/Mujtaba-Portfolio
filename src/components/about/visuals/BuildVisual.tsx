type VisualProps = { isVisible: boolean }

export default function BuildVisual({ isVisible }: VisualProps) {
  return (
    <div className={`about-visual build-story ${isVisible ? 'about-visual--active' : ''}`} aria-hidden="true">
      <span className="build-fragment build-fragment--top" />
      <span className="build-fragment build-fragment--left" />
      <span className="build-fragment build-fragment--right" />
      <div className="build-product">
        <div className="build-product__bar"><i /><i /><i /></div>
        <div className="build-product__body">
          <span className="build-product__nav" />
          <span className="build-product__panel" />
          <span className="build-product__card build-product__card--one" />
          <span className="build-product__card build-product__card--two" />
          <span className="build-product__cursor" />
          <span className="build-product__status" />
        </div>
      </div>
    </div>
  )
}
