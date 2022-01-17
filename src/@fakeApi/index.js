import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import fixedRates from "./fixedRates";
import cities from "./cities";
import ddds from "./ddds";

const mock = new MockAdapter(axios);

mock.onGet("/fixedRates").reply(200, fixedRates);
mock.onGet("/cities").reply(200, cities);
mock.onGet("/ddds").reply(200, ddds);

mock.onPost("/simulate").reply((body) => {
  const { dddOrigin, dddDestiny, minutes, plan } = JSON.parse(body.data);
  const rate = fixedRates.filter((rate) => {
    return rate.dddOrigin === dddOrigin && rate.dddDestination === dddDestiny;
  });
  const withoutPlan = rate[0].rateInMinutes * minutes;
  function calculatePlan(plan) {
    let minutesOver;
    let withPlan;
    let discount;
    if (minutes > plan) {
      minutesOver = minutes - plan;
      const fareCalculation = minutesOver * rate[0].rateInMinutes;
      const addition = fareCalculation * 0.1;
      withPlan = fareCalculation + addition;
      discount = ((withoutPlan - withPlan) / withoutPlan) * 100;
    } else {
      withPlan = 0;
      discount = 100;
    }
    return { withPlan, withoutPlan, discount };
  }
  return [200, calculatePlan(plan)];
});

mock.onAny().passThrough();
