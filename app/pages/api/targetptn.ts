import { NextApiRequest, NextApiResponse } from 'next';

export type targetPTN = {
    faculty: string,
    university: string,
}

//tambahin API eksternal
const targetPTN: targetPTN[] = [
  { faculty: 'Teknik', university: 'ITS' },
  { faculty: 'Teknik', university: 'ITS' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(targetPTN);
}