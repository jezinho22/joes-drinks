import Card from "./Card";

export default function Main({cards}) {
	console.log("Main called");
	return (
		<main id="about-app">
			<h2>About this app</h2>
			<p>
				This app allows you to quickly find out how many units of alcohol a
				drink contains, and also what kind of alcohol value for money this
				gives.
			</p>
			<p className="quote">
				" ... find out how many units of alcohol a drink contains ... and how
				much they cost ..."
			</p>
			<p>
				Just input volume, price and alcohol percentage, and the app does the
				rest. It also stores your queries, so you can refer back and compare.
				And you can filter and sort your items - so you can compare deals and
				off-brand offerings.
			</p>
			<p className="quote"> ... value for money is important ... </p>
			<p>
				Taste, branding, atmosphere and other qualities will be important. But
				so is value for money. And this app will ensure you are getting the
				biggest bang for your buck.
			</p>
			<p className="quote"> "... but alcohol is a poison ..." </p>
			<p>
				But alcohol is a poison. It is not good for you and can easily harm you.
				See below for more information. This app enables you to see how many
				units of alcohol you may be consuming and how this compares to what is
				safe.
			</p>
			<p className="quote">
				"... see how many units of alcohol you may be consuming and how this
				compares to what is safe..."
			</p>
			<p>
				Work out how many units gets you feeling how you want to feel and then
				work out how much of any given drink will provide that.
			</p>
			<h2 id="about-alcohol">About drinking alcohol</h2>

			<p>
				To talk about 'units' of alcohol frequently confuses people, because
				many think a unit is a glass of wine almost regardless of its size, and
				some pubs and restaurants only serve large glasses. In truth, a large
				glass (250ml) of 13.5% ABV (alcohol by volume) wine consists of more
				than three 'units', so drinking two large glasses quickly can constitute
				binge drinking for some people."
			</p>
			<p className="quote">
				"... the definition used by the Office of National Statistics for binge
				drinking is having over eight units in a single session for men, and
				over six units for women ..."
			</p>
			<p>
				The NHS defines binge drinking as "drinking lots of alcohol in a short
				space of time". UK researchers commonly define it as consuming more than
				six units of alcohol in a single session [
				<span className="italic">within about two hours</span>] for men and
				women, with six units equivalent to drinking between 3 standard glasses
				of 13.5% strength wine (or just 2 large ones), or 3 pints of standard
				lager.
			</p>
			<p>
				The definition used by the Office of National Statistics for binge
				drinking is having over eight units in a single session for men, and
				over six units for women.
			</p>
			<p className="quote">
				"... both men and women should drink no more than 14 units in a week
				..."
			</p>
			<p>
				The Department of Health's limits - which came into effect in January
				2016 - stated that both men and women should drink no more than 14 units
				in a week. (Fourteen units being equivalent to six pints of 4% lager, or
				around 6 standard glasses (175ml) of 13.5% wine.) Previously the
				guidelines were 14 units of alcohol a week for women and 21 for men.
			</p>
			<p>
				It is worth knowing that only 10 minutes after having a drink, 50% of
				the alcohol will be in your bloodstream.
			</p>
			<p className="quote">
				"... your body can only process one unit of alcohol per hour ..."
			</p>
			<p>
				Charity DrinkAware says: "Your body can only process one unit of alcohol
				per hour. Two large glasses of wine may not seem like very much. But
				drinking six units of alcohol in a short space of time - an hour, say -
				will raise your blood alcohol concentration and could make you drunk
				very quickly. As well as the long term dangers, the risks of short-term
				harm like accidents or injuries increase between two to five times from
				drinking five to seven units."
			</p>
			<p id="source">
				{`Extracted from: `}
				<a href="https://www.priorygroup.com/blog/nearly-half-of-us-dont-know-what-constitutes-binge-drinking">
					priorygroup.com
				</a>
			</p>
			<div id="drink-cards">
			{cards.map((card) => (
				<Card cardData={card} />
			))}
			</div>
		</main>
	);
}
