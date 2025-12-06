'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import DarkModePage from '../components/pages/DarkModePage';
import LightModePage from '../components/pages/LightModePage';

export default function PortfolioPage() {
	const { resolvedTheme } = useTheme();
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<div>
			{resolvedTheme === 'light' ? <LightModePage /> : <DarkModePage />}
		</div>
	);
}
