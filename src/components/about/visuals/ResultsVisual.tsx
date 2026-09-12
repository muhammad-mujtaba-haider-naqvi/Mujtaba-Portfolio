type VisualProps = { isVisible: boolean }

export default function ResultsVisual({ isVisible }: VisualProps) {
  return (
    <div className={`about-visual results-visual shrink-0 overflow-hidden rounded-lg border border-[#fff8ef]/35 bg-[#ead8c4]/90 p-1.5 shadow-[0_6px_14px_rgba(94,57,34,0.14)] ${isVisible ? 'about-visual--active' : ''}`} style={{ width: 144 }} aria-hidden="true">
      <div className="impact-loop">
        <div className="impact-system impact-system--build">
          <span className="impact-node impact-node--a" />
          <span className="impact-node impact-node--b" />
          <span className="impact-node impact-node--c" />
          <span className="impact-connector impact-connector--a" />
          <span className="impact-connector impact-connector--b" />
        </div>

        <div className="impact-measure">
          <span className="measure-bar measure-bar--1" />
          <span className="measure-bar measure-bar--2" />
          <span className="measure-bar measure-bar--3" />
          <span className="measure-bar measure-bar--4" />
        </div>

        <div className="impact-system impact-system--improve">
          <span className="impact-node impact-node--a" />
          <span className="impact-node impact-node--b" />
          <span className="impact-node impact-node--c" />
          <span className="impact-connector impact-connector--a" />
          <span className="impact-connector impact-connector--b" />
        </div>
      </div>
    </div>
  )
}
