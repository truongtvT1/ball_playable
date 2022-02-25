using UnityEngine;

namespace Truongtv.Utilities
{
    public static class Extended 
    {
        public static bool IsInLayerMask(GameObject obj, LayerMask layerMask)
        {
            return ((layerMask.value & (1 << obj.layer)) > 0);
        }
    }
    
}
