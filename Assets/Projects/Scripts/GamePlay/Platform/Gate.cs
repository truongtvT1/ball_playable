using Projects.Scripts.UIController;
using Truongtv.Utilities;
using UnityEngine;

namespace Projects.Scripts.GamePlay.Platform
{
    public class Gate : MonoBehaviour
    {

        [SerializeField] private Transform target;
        [SerializeField] private GameObject gateLight;
        [SerializeField] private Collider2D collider;
        [SerializeField] private LayerMask ballLayer;
        private void OnTriggerEnter2D(Collider2D collider2D)
        {
            if(!Extended.IsInLayerMask(collider2D.gameObject,ballLayer)) return;
            collider.enabled = false;
            if (gateLight)
            {
                gateLight.SetActive(true);
            }
            GamePlayController.Instance.ball.Win(target);
        }
    }
}