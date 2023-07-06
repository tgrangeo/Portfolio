import { BingoImgList, overrideImgList, rainfallImgList } from "./imgList"
import { transImgList } from "./imgList"
import { proteinsImgList } from "./imgList"
import { compagnionImgList } from "./imgList"

export const ProjectList = [
	{
		name: "Bingo",
		image: BingoImgList,
		url: "https://github.com/tgrangeo/bingoApp",
		tags: ["Web"],
		githubLink: "https://github.com/tgrangeo",
		skills: "Flutter, Dart",
		resume: "A desktop app to play bingo with your friends (number cardboard not included)"
	},
	{
		name: "Proteins",
		image: proteinsImgList,
		tags: ["Mobile"],
		url: "https://github.com/prownie/swifty-proteins",
		githubLink: "https://github.com/tgrangeo",
		skills: "Flutter, Dart, three_dart(3D), API",
		resume: "A phone app to render 3D molecule"
	},
	{
		name: "Compagnion",
		tags: ["Mobile"],
		url: "https://github.com/tgrangeo/flutter_compagnion",
		image: compagnionImgList,
		githubLink: "https://github.com/tgrangeo",
		skills: "Flutter, Dart",
		resume: "A phone App who connect to the school API and display student information"
	},
	{
		name: "Transcendence",
		tags: ["Web"],
		url: "https://github.com/0xAlidy/Ft_Transcendence",
		image: transImgList,
		githubLink: "https://github.com/tgrangeo",
		skills: "React, Nest, Docker, etc...",
		resume: "Last core curriculum project from school, a pong multiplayer navigator game with social interaction"
	},
	// {
	// 	name: "Portfolio",
	// 	tags: ["Web"],
	// 	url: "https://github.com/tgrangeo/Portfolio",
	// 	image: transImgList,
	// 	githubLink: "https://github.com/tgrangeo",
	// 	skills: "React, Go",
	// 	resume: "my very first portfolio"
	// },
	{
		name: "Rainfall",
		tags: ["Security"],
		url: "https://github.com/jdel-ros/Rainfall",
		image: rainfallImgList,
		githubLink: "https://github.com/tgrangeo",
		skills: "React, Go",
		resume: "part 1/2 initiation security basics"
	},
	{
		name: "OverRide",
		tags: ["Security"],
		url: "https://github.com/jdel-ros/OverRide",
		image: overrideImgList,
		githubLink: "https://github.com/tgrangeo",
		skills: "Shell, Reverse Engenering, Shellcode and more",
		resume: "part 2/2 initiation security basics"
	},
]