using System.Collections;
using UnityEngine;

namespace Projects.Scripts.GamePlay.CharacterController
{
    public class BallMagnetic : MonoBehaviour
    {
        [SerializeField] private GameObject magnetic,magnetEffect;
        private int _coinCollectCount;
        private BallController _controller;
        public void Init(BallController controller)
        {
            _controller = controller;
        }
        public void ActiveMagnet(bool active)
        {
            magnetic.SetActive(active);
        }

        public void CollectingCoin()
        {
            _coinCollectCount++;
            magnetEffect.SetActive(true);
        }

        public void Collected()
        {
            _coinCollectCount--;
            if(_coinCollectCount==0)
                magnetEffect.SetActive(false);
        }

    }
}