import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
	const priceOptions = [
		{
			id: 1,
			name: "Basic",
			price: 29.99,
			features: [
				"Access to gym equipment",
				"Locker room access",
				"Free Wi-Fi",
				"Open gym hours",
				"Basic fitness assessment",
				"Water station access",
			],
		},
		{
			id: 2,
			name: "Standard",
			price: 49.99,
			features: [
				"Access to gym equipment",
				"Locker room access",
				"Free Wi-Fi",
				"Group fitness classes",
				"Access to sauna",
				"Open gym hours",
				"Advanced fitness assessment",
				"Towel service",
				"Discount on merchandise",
			],
		},
		{
			id: 3,
			name: "Premium",
			price: 79.99,
			features: [
				"Access to gym equipment",
				"Locker room access",
				"Free Wi-Fi",
				"Group fitness classes",
				"Access to sauna",
				"Personal training sessions",
				"Nutrition consultation",
				"Guest passes",
				"Open gym hours",
				"Comprehensive fitness assessment",
				"Towel service",
				"Discount on merchandise",
				"Access to VIP lounge",
				"Priority class booking",
				"Free parking",
			],
		},
	];

	return (
		<div className="m-12">
			<h2 className="text-5xl">Best Prices in the town</h2>
            <div className="grid md:grid-cols-3 gap-6">
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
		</div>
	);
};

export default PriceOptions;
