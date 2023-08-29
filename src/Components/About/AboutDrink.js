import React from "react";

export default function AboutDrink() {
	return (
		<div>
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
			<p className="quote">Find out more:</p>
			<ul className="more-info">
				<li className="find-out-more">
					<a href="https://www.drugrehab.com/addiction/alcohol/how-long-does-alcohol-stay-in-your-system/#how-long-does-it-take-to-sober-up">
						How long before I am sober enough to drive?
					</a>
					&nbsp; Also on that page: Is there anyway to quickly 'sober me up' to
					drive? (the answer is no, by the way, the alcohol is still in your
					blood - just go to bed)
				</li>
				<li className="find-out-more">
					<a href="https://www.drugrehab.com/addiction/alcohol/how-long-does-alcohol-stay-in-your-system/#factors-that-affect-bac">
						What difference does food make?
					</a>
					&nbsp;Also: How and why is alcohol different for women and men?
				</li>
				<li className="find-out-more">
					<a href="https://www.drugrehab.com/addiction/alcohol/effects-of-alcohol/">
						What does alcohol actually do to make me feel the way I do when I
						drink?
					</a>
					&nbsp; Also on that page: Why do I need the toilet more? Why do I get
					tearful or over-affectionate or aggressive? And: Why do I make
					decisions differently? And: Why do I forget stuff that happened?
				</li>
			</ul>
		</div>
	);
}
