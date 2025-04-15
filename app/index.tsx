import React from "react";
import { ScrollView } from "react-native";

import { MemeBtn } from "@/components/MemeBtn";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";



const FeatureCard = ({ iconSvg: IconSvg, name, desc }: any) => {
	return (
		<Box
			className="flex-column border border-w-1 border-outline-700 md:flex-1 m-2 p-4 rounded"
			key={name}
		>
			<Box className="items-center flex flex-row">
				<Text>
					<IconSvg />
				</Text>
				<Text className="text-typography-white font-medium ml-2 text-xl">
					{name}
				</Text>
			</Box>
			<Text className="text-typography-400 mt-2">{desc}</Text>
		</Box>
	);
};

export default function Home() {
	return (
		<Box className="flex-1 bg-[#1d2533] h-[100vh]">
            <Box className="flex flex-1 items-center my-16 mx-5 lg:my-24 lg:mx-32">
                <Box className="gap-10 base:flex-col sm:flex-row justify-between sm:w-[80%] md:flex-1">
                    <Box className="bg-background-template py-2 px-6 rounded-full items-center flex-column md:flex-row md:self-start">
                        <Text className="text-typography-white text-4xl text-center font-normal">
                            Høppstudio Deck
                        </Text>
                        <ScrollView>
                            <Box className="flex flex-row flex-wrap gap-6 my-8 justify-between h-full w-full">
                                <MemeBtn title="Approved" imagePath={require('@/assets/images/Approved.jpg')} imageAlt="Approved" audioPath={require('@/assets/audio/approved.mp3')} />
                                <MemeBtn title="Strength" imagePath={require('@/assets/images/strength.webp')} imageAlt="strength" audioPath={require('@/assets/audio/strength.mp3')} />
                                <MemeBtn title="Deal?" imagePath={require('@/assets/images/deal.jpg')} imageAlt="deal" audioPath={require('@/assets/audio/deal-question.mp3')} />
                                <MemeBtn title="Deal!" imagePath={require('@/assets/images/deal.jpg')} imageAlt="deal" audioPath={require('@/assets/audio/deal-answer.mp3')} />
                                <MemeBtn title="Sure" imagePath={require('@/assets/images/sure.jpg')} imageAlt="sure" audioPath={require('@/assets/audio/sure.mp3')} />
                                <MemeBtn title="Perfect" imagePath={require('@/assets/images/perfect.jpg')} imageAlt="perfect" audioPath={require('@/assets/audio/perfect.mp3')} />
                            </Box>
                        </ScrollView>
                    </Box>
                </Box>
            </Box>
		</Box>
	);
}
