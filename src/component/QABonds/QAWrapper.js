import React from 'react';
import { useParams } from 'react-router-dom';
import { ROUTES } from '../../Route/Routes.constants';
import QABonds from './QABonds.Layout';
import { BondExplainationData, decisionMakingForInvesting, perksOfInvestingData } from './QABondData';

const QAWrapper = () => {

  const { id } = useParams();

  return (
	<>
		{
			id === ROUTES.BOND_EXPLAINATION.substr(1) && <QABonds data={BondExplainationData} />
		}
		{
			id === ROUTES.DECISION_MAKING_ON_INVESTMENT.substr(1) && <QABonds data={decisionMakingForInvesting} />
		}
		{
			id === ROUTES.PERKS_ON_BOND_INVESTING.substr(1) && <QABonds data={perksOfInvestingData} />
		}
	</>
  )
}

export default QAWrapper;
