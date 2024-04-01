import { Container } from "../../components/Container/Container.js";

import { ForecastList } from "../../components/ForecastList/ForecastList.js";
import { ForecastHeader } from "../../components/ForecastHeader/ForecastHeader.js";

export function Forecast({}) {

  return (
    <Container>
      <ForecastHeader />
      <ForecastList />
    </Container>

  )
}