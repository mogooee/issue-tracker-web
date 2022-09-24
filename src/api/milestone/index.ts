import axios, { AxiosError } from 'axios';
import { MilestoneTypes } from '@/api/issue/types';

export interface MilestoneListTypes {
  closedMilestones: MilestoneTypes[];
  openedMilestones: MilestoneTypes[];
}

export type RequestMilestoneTypes = Pick<MilestoneTypes, 'title' | 'description' | 'dueDate'>;

export const getMilestoneData = async () => {
  try {
    const { data } = await axios.get<MilestoneListTypes>(`${process.env.REACT_APP_PUBLIC_URL}api/milestones`);
    return data;
  } catch (error) {
    const err = error as AxiosError;
    throw err;
  }
};

export const createNewMilestone = async (milestoneData: RequestMilestoneTypes) => {
  try {
    const { data } = await axios.post<MilestoneTypes>(
      `${process.env.REACT_APP_PUBLIC_URL}api/milestones`,
      milestoneData,
    );
    return data;
  } catch (error) {
    const err = error as AxiosError;
    throw err;
  }
};

export const patchMilestoneData = async ({
  id,
  milestoneData,
}: {
  id: number;
  milestoneData: RequestMilestoneTypes;
}) => {
  try {
    const { data } = await axios.patch<MilestoneTypes>(
      `${process.env.REACT_APP_PUBLIC_URL}api/milestones/${id}`,
      milestoneData,
    );
    return data;
  } catch (error) {
    const err = error as AxiosError;
    throw err;
  }
};

export const patchMilestoneState = async (id: number) => {
  try {
    const { data } = await axios.patch<MilestoneTypes>(
      `${process.env.REACT_APP_PUBLIC_URL}api/milestones/${id}/status`,
    );
    return data;
  } catch (error) {
    const err = error as AxiosError;
    throw err;
  }
};

export const deleteMilestone = async (id: number) => {
  try {
    const { data } = await axios.delete<MilestoneTypes>(`${process.env.REACT_APP_PUBLIC_URL}api/milestones/${id}`);
    return data;
  } catch (error) {
    const err = error as AxiosError;
    throw err;
  }
};
