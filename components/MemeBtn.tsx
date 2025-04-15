import React, { useState, useEffect } from "react";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { Audio } from "expo-av";

interface MemeBtnProps {
    title: string;
    imagePath: any;
    imageAlt: string;
    audioPath?: any;
}

export const MemeBtn = ({ title, imagePath, imageAlt, audioPath }: MemeBtnProps) => {
    const [sound, setSound] = useState<Audio.Sound | null>(null);

    useEffect(() => {
        return sound
            ? () => {
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    async function playSound() {
        try {
            const { sound: newSound } = await Audio.Sound.createAsync(audioPath);
            setSound(newSound);
            
            await newSound.playAsync();
        } catch (error) {
            console.error('Error playing sound:', error);
        }
    }

    return (
        <Button 
            variant="outline" 
            className="h-fit py-4 w-full border-4 border-white rounded"
            onPress={() => {
                if (audioPath) {
                    playSound();
                } else {
                    console.log("No audio path provided");
                }
            }}
        >
            <Box className="flex flex-col gap-4 justify-center items-center">
                <ButtonText className="text-typography-white text-4xl text-center font-normal">
                    {title}
                </ButtonText>
                <Image
                    size="xl"
                    source={imagePath}
                    alt={imageAlt}
                />
            </Box>
        </Button>
    );
};
