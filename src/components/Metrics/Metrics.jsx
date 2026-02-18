import "./metrics.scss"

const Metrics = (props) => {
  const { className, metrics } = props

  return (
    <div className={`${className} metrics`}>
      <dl className="metrics__list">
        {metrics.map(({ key, value, id }) => {
          return (
            <div className={"metrics__item"} key={id}>
              <dt className={"metrics__key"}>{key}</dt>
              <dd className={"metrics__value"}>
                {value}
                <span className={"metrics__sign"}>+</span>
              </dd>
            </div>
          )
        })}
      </dl>
    </div>
  )
}

export default Metrics
