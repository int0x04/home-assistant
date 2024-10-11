from homeassistant.components.binary_sensor import BinarySensorEntity
from homeassistant.helpers.entity import EntityCategory

from ..nhccoco.devices.naso_smartplug import CocoNasoSmartplug
from .nhc_entity import NHCBaseEntity


class Nhc2NasoSmartplugMeasuringOnlyEntity(NHCBaseEntity, BinarySensorEntity):
    _attr_has_entity_name = True

    def __init__(self, device_instance: CocoNasoSmartplug, hub, gateway):
        """Initialize a binary sensor."""
        super().__init__(device_instance, hub, gateway)

        self._attr_unique_id = device_instance.uuid + '_measuring_only'

        self._attr_state = self._device.is_measuring_only
        self._attr_entity_category = EntityCategory.DIAGNOSTIC

    @property
    def name(self) -> str:
        return 'Measuring Only'

    @property
    def is_on(self) -> bool:
        return self._device.is_measuring_only
