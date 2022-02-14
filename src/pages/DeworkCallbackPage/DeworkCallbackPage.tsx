import { FC, useCallback, useEffect, useMemo } from 'react';

import { useApi } from 'lib/gql';
import { useLocation, useNavigate } from 'react-router-dom';

import { useSelectedCircle } from 'recoilState';
import { getCirclesPath } from 'routes/paths';

export const DeworkCallbackPage: FC = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const params = useMemo(() => new URLSearchParams(search), [search]);

  const { circleId } = useSelectedCircle();

  const { createCircleIntegration } = useApi();
  const updateDeworkOrganizationId = useCallback(async () => {
    const organizationId = params.get('dework_organization_id');
    const organizationName = params.get('dework_organization_name');
    await createCircleIntegration(
      circleId,
      'dework',
      `${organizationName} on Dework`,
      { organizationId }
    );

    navigate(getCirclesPath());
  }, [params, createCircleIntegration, navigate]);
  useEffect(() => {
    updateDeworkOrganizationId();
  }, []);
  return null;
};
