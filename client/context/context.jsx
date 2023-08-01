"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import Web3 from 'web3';

export const Web3Context = createContext();

export const useWeb3 = () => useContext(Web3Context);

export const Web3Provider = ({ children }) => {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const checkWeb3Provider = async () => {
      if (window.ethereum) {
        try {
          const provider = window.ethereum;
          await provider.request({ method: 'eth_requestAccounts' });
          const web3Instance = new Web3(provider);
          setWeb3(web3Instance);
          setConnected(true);
        } catch (error) {
          console.error('Error connecting to the web3 provider:', error);
          setWeb3(null);
          setConnected(false);
        }
      } else {
        console.warn('No web3 provider detected.');
        setWeb3(null);
        setConnected(false);
      }
    };

    checkWeb3Provider();
  }, []);

  useEffect(() => {
    const updateAccounts = async () => {
      if (web3) {
        try {
          const updatedAccounts = await web3.eth.getAccounts();
          setAccounts(updatedAccounts);
        } catch (error) {
          console.error('Error fetching accounts:', error);
          setAccounts([]);
        }
      } else {
        setAccounts([]);
      }
    };

    updateAccounts();
  }, [web3]);

  return (
    <Web3Context.Provider value={{ web3, accounts, connected }}>
      {children}
    </Web3Context.Provider>
  );
};
