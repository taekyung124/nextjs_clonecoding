import * as React from 'react';
import { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";
import styles from "@/components/organism/loading/Loading.module.scss";

import { useBodyLock } from "@/hooks/useBodyLock";
import animationData from "./loadingAni.json";

interface LoadingProps {
	isOpen?: boolean;
	duration?: number;
	onClose?: () => void;
}

export const Loading: React.FC<LoadingProps> = ({
	isOpen = false,
	duration,
	onClose,
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const lottieInstance = useRef<AnimationItem | null>(null);

	// ✅ Lottie 초기화
	useEffect(() => {
		if (!containerRef.current) return;

		// 이미 인스턴스가 있으면 파괴 후 다시 생성
		if (lottieInstance.current) {
			lottieInstance.current.destroy();
		}

		// 로딩 오픈 시 애니메이션 생성
		if (isOpen) {
			lottieInstance.current = lottie.loadAnimation({
				container: containerRef.current,
				renderer: "svg",
				loop: true,
				autoplay: true,
				animationData,
				rendererSettings: {
					preserveAspectRatio: "xMidYMid meet",
				},
			});
		}

		// duration 설정 시 자동 close
		if (isOpen && duration) {
			const timer = setTimeout(() => {
				if (onClose) onClose();
			}, duration);
			return () => clearTimeout(timer);
		}

		// 언마운트 시 정리
		return () => {
			if (lottieInstance.current) {
				lottieInstance.current.destroy();
				lottieInstance.current = null;
			}
		};
	}, [isOpen, duration, onClose]);

	useBodyLock(isOpen);
	if (!isOpen) return null;

	return (
		<div className={styles.loadingWrap}>
			<div className={styles.loading} ref={containerRef}></div>
		</div>
	)
}