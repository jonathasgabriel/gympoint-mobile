import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Background from '~/components/Background';

import api from '~/services/api';
import { Container, SubmitButton, HelpOrderList, HelpOrder } from './styles';

export default function ListOrder() {
  const [helpOrders, setHelpOrders] = useState([]);

  const studentId = useSelector(state => state.user.user);

  useEffect(() => {
    async function loadHelpOrders() {
      const response = await api.get(`/students/${studentId}/help-orders`);

      setHelpOrders(response.data);
    }

    loadHelpOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Background>
      <Container>
        <SubmitButton onPress={() => {}} />
        <HelpOrderList
          data={helpOrders}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <HelpOrder onPress={() => {}} />}
        />
      </Container>
    </Background>
  );
}
