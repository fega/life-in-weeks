import {
  differenceInWeeks,
  subYears,
} from 'date-fns';

export const INITIAL_YEARS = 125;
export const WEEKS_IN_A_YEAR = 52;
export const INITIAL_BIRTHDAY = '1994-02-09';
export const INITIAL_BIRTHDAY_DATE = new Date(INITIAL_BIRTHDAY);
export const PAST_DATE = new Date(0);
export const FUTURE_DATE = new Date('2100-02-09');
export const MIN_DATE = subYears(new Date(), INITIAL_YEARS).toISOString;
export const MAX_DATE = new Date().toISOString;

const COLORS = ['#00d0ff', '#49e9a6', '#e8ff00', '#ff9800', 'red', '#673ab7'];

const FACTS = {
  0: {
    name: 'Birth',
  },
  [3785 + 52]: {
    name: 'Average Global Life Span',
  },
  [55 * 52 + 1]: {
    name: 'Death of Hitler',
  },
  [11 * 52]: {
    name: 'First Decade',
  },
  [21 * 52]: {
    name: 'Legal Age to Drink in USA',
  },
  [18 * 52]: {
    name: 'You\'re and adult!',
  },
  [Math.round(53.1 * 52)]: {
    name: 'Average Life Span in Central African Republic',
  },
  [Math.round(84.3 * 52)]: {
    name: 'Average Life Span in Japan',
  },
  [Math.round(79.3 * 52)]: {
    name: 'Average Life Span in Colombia',
  },
  [Math.round(101 * 52)]: {
    name: 'A Century',
  },
  [differenceInWeeks(new Date('1687-07-05'), new Date('1643-01-04'))]: {
    name: 'Newton publish about gravity',
  },
  [differenceInWeeks(new Date('2014-08-10'), new Date('1997-07-12'))]: {
    name: 'Youngest Nobel Peace Prize winner',
  },
  [Math.round(122 * 52 + (164 / 365) * 52)]: {
    name: 'Oldest verified woman ever',
  },
  [Math.round(116 * 52 + (54 / 365) * 52)]: {
    name: 'Oldest verified man ever',
  },
  [differenceInWeeks(new Date('1905-09-26'), new Date('1879-03-14'))]: {
    name: 'Einstein publish about relativity',
  },
};
export const BASIC_LIFE_PHASES = [{
  name: 'Early Years',
  from: 0,
  color: COLORS[0],
}, {
  name: 'Elementary School (USA)',
  from: 5,
  color: COLORS[1],
}, {
  name: 'Middle School (USA)',
  from: 11.5,
  color: COLORS[2],
}, {
  name: 'High School (USA)',
  from: 14.5,
  color: COLORS[3],
}, {
  name: 'College (USA)',
  from: 18.5,
  color: COLORS[4],
}, {
  name: 'Career',
  from: 21.5,
  color: COLORS[5],
}, {
  name: 'Retirement',
  from: 63,
  color: 'blue',
}].reverse();

const generateWeek = (phases, year, week) => ({
  week,
  year,
  tooltip: FACTS[year * 52 + week],
  phase: phases.find((phase) => phase.from <= (year + week / WEEKS_IN_A_YEAR)),
});

const generateWeeks = (phases, year) => new Array(WEEKS_IN_A_YEAR)
  .fill(false).map((_, week) => generateWeek(phases, year, week));

const getYear = (phases) => (year, yearIndex) => ({
  year: yearIndex,
  weeks: generateWeeks(phases, yearIndex),
});

export const getYears = () => new Array(INITIAL_YEARS)
  .fill(false)
  .map(getYear(BASIC_LIFE_PHASES));
