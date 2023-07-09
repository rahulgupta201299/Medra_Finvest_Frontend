import LearnAboutBondImg from '../../assets/LearnAboutBondImg.jpeg';
import PerksOfInvestingImg from '../../assets/PerksOfInvesting.jpeg';
import WhichOneToInvestImg from '../../assets/WhichOneToInvest.jpg';
import YashImg from '../../assets/YASH _JAIN.png';
import AyushImg from '../../assets/Aayush_Jain.png';
import AjitImg from '../../assets/Ajit_Jain.png';
import DiversifiedPortfolio from '../../assets/DiversifiedPortfolio.png';
import ScaleIcon from '../../assets/ScaleIcon.png';
import CoinIcon from '../../assets/CoinIcon.png';
import { ROUTES } from '../../Route/Routes.constants';

export const BondDetails = [
	{
		src: DiversifiedPortfolio,
		val: 'Diversify portfolio with fixed income',
		style: { marginBottom: '4px' },
		width: '35px',
		height: '25px',
	},
	{
		src: CoinIcon,
		val: 'Get Fixed Return as high as 12%',
		style: { margin: '-0.875rem -1rem 0 -1rem' },
		width: '65px',
		height: '45px',
	},
	{
		src: ScaleIcon,
		val: 'Consistent capital growth with minimal risk',
		style: { marginTop: '-4px', marginRight: '-4px' },
		width: '40px',
		height: '30px',
	},
];

export const learnAboutBondsData = [
	{
		id: 1,
		src: LearnAboutBondImg,
		title: 'Must know about Bonds before investing',
		to: ROUTES.BOND_EXPLAINATION,
		
	},
	{
		id: 2,
		src: PerksOfInvestingImg,
		title: 'Perks of investing in Bonds',
		to: ROUTES.PERKS_ON_BOND_INVESTING,
	},
	{
		id: 3,
		src: WhichOneToInvestImg,
		title: `Decision making for investing in FD's, PPF or Bond-ETF`,
		to: ROUTES.DECISION_MAKING_ON_INVESTMENT,
	},
];

export const meetOurTeam = [
	{
		src: AjitImg,
		name: 'Ajit Jain',
		position: 'Managing Director',
	},
	{
		src: AyushImg,
		name: 'Ayush Jain',
		position: 'Director',
	},
	{
		src: YashImg,
		name: 'Yash Jain',
		position: 'Director',
	},
];