import FeaturesFeatures from './FeaturesFeatures';
import FeaturesTrustPilot from './FeaturesTrustPilot';

export default function FeaturesContent({
  innerRef,
}: {
  innerRef: React.RefObject<HTMLDivElement>;
}) {
  return (
    <div ref={innerRef} className="flex flex-col gap-8 p-8 bg-white rounded-lg">
      <FeaturesTrustPilot />
      <FeaturesFeatures />
    </div>
  );
}
